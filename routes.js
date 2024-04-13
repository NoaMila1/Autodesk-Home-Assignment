const express = require('express');
const axios = require('axios');
const osUtils = require('os-utils');
const os = require('os');
const utils = require('./utils'); 
const moment = require('moment');
const youtubeApiBasePath = 'https://www.googleapis.com/youtube/v3'



var router = express.Router(); 

router.get('/GetAutoDeskYouTubeVideo', async function(req, res) {
    try {
        const searchResponse = await axios.get(`${youtubeApiBasePath}/search?part=snippet&maxResults=10&q=Autodesk&type=video&key=${process.env.YOUTUBE_API_KEY}`);
        const videoIds = searchResponse.data.items.map(item => item.id.videoId).join(',');

        const detailsResponse = await axios.get(`${youtubeApiBasePath}/videos?part=contentDetails,statistics,snippet&id=${videoIds}&key=${process.env.YOUTUBE_API_KEY}`);

        const videoDetails = detailsResponse.data.items.map(function(video) {
            const duration = moment.duration(video.contentDetails.duration);
            return {
                topic: video.snippet.title,
                length: utils.formatDuration(duration),
                views: video.statistics.viewCount
            };
        });
        res.status(200).json(videoDetails);
    } catch (error) {
        console.error('Error fetching videos:', error);
        res.status(500).json({ message: 'Failed to fetch videos', error: error.message });
    }
});

router.get('/health', function(req, res) {
    osUtils.cpuUsage(function(v){
        res.json({
            os: os.type(),
            platformVersion: process.version,
            memoryUsage: osUtils.freememPercentage(),
            cpuUsage: v
        });
    });
});

module.exports = router;

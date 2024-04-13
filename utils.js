function formatDuration(duration) {
    let durationResult = '';
    durationResult += duration.hours() > 0 ? `${duration.hours()}h ` : '';
    durationResult += duration.minutes() > 0 ? `${duration.minutes()}m ` : '';
    durationResult += duration.seconds() > 0 ? `${duration.seconds()}s ` : '';
    return durationResult.trim();
}

module.exports = {
    formatDuration: formatDuration
};

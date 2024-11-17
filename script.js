function changeChannel(newUrl) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = newUrl;
    videoPlayer.play();
}

function filterChannels() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const channels = document.querySelectorAll('.channel-list img');

    channels.forEach(channel => {
        const channelName = channel.getAttribute('data-name').toLowerCase();
        if (channelName.includes(searchValue)) {
            channel.style.display = 'inline-block';
        } else {
            channel.style.display = 'none';
        }
    });
}

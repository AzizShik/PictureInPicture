window.addEventListener('load', () => {
	const videoEl = document.querySelector('#video');
	const btnEl = document.querySelector('#btn');

	async function selectMediaStream() {
		try {
			const mediaStream = await navigator.mediaDevices.getDisplayMedia();
			videoEl.srcObject = mediaStream;
			videoEl.onloadedmetadata = () => {
				videoEl.play();
			};
		} catch (e) {
			console.error('Error', e);
		}
	}

	btnEl.addEventListener('click', async () => {
		btnEl.disabled = true;
		await videoEl.requestPictureInPicture();
		btnEl.disabled = false;
	});

	selectMediaStream();
});

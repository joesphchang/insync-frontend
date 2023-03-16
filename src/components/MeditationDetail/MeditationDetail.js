import React from 'react';
import AudioControls from '../AudioControls/AudioControls';
import { useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { IconContext } from 'react-icons';

import { useParams } from 'react-router-dom';

function MeditationDetail() {
	// state
	const [details, setDetails] = useState(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [audio, setAudio] = useState(null);
	const { id } = useParams();

	const [seconds, setSeconds] = useState();
	const [time, setTime] = useState({
		min: '',
		sec: '',
	});
	const [currTime, setCurrTime] = useState({
		min: '',
		sec: '',
	});

	const [play, { pause, duration, sound }] = useSound(audio);

	const getMeditationDetail = async () => {
		try {
			const res = await fetch(
				`https://insync-backend.onrender.com/meditations/${id}`
			);
			const data = await res.json();
			if (res.status === 200) {
				setDetails(data);
				setAudio(data.audio);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getMeditationDetail();
	}, []);

	useEffect(() => {
		if (duration) {
			const sec = duration / 1000;
			const min = Math.floor(sec / 60);
			const secRemain = Math.floor(sec % 60);
			setTime({
				min: min,
				sec: secRemain,
			});
		}
	}, [isPlaying]);

	const playingButton = () => {
		if (isPlaying) {
			pause();
			setIsPlaying(false);
		} else {
			play();
			setIsPlaying(true);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (sound) {
				setSeconds(sound.seek([]));
				const min = Math.floor(sound.seek([]) / 60);
				const sec = Math.floor(sound.seek([]) % 60);
				setCurrTime({
					min,
					sec,
				});
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [sound]);

	if (!details) {
		return <div>Loading Meditation...</div>;
	}

	return (
		<div className='meditation_detail-container'>
			<h1 className='detail-title'>{details.title}</h1>
			<img className='detail-image' src={details.photo_url} alt='' />
			<div className='time'>
				<p>
					{currTime.min}:{currTime.sec}
				</p>
				<p>
					{time.min}:{time.sec}
				</p>
			</div>
			<div className='audio-player'>
				<input
					type='range'
					min='0'
					max={duration / 1000}
					default='0'
					value={seconds}
					className='timeline'
					onChange={(e) => {
						sound.seek([e.target.value]);
					}}
				/>
        <div>
				<button className='playButton'>
					<IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
						<BiSkipPrevious />
					</IconContext.Provider>
				</button>
				{!isPlaying ? (
					<button className='playButton' onClick={playingButton}>
						<IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
							<AiFillPlayCircle />
						</IconContext.Provider>
					</button>
				) : (
					<button className='playButton' onClick={playingButton}>
						<IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
							<AiFillPauseCircle />
						</IconContext.Provider>
					</button>
				)}
				<button className='playButton'>
					<IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
						<BiSkipNext />
					</IconContext.Provider>
				</button>
        </div>
			</div>
		</div>
	);
}

export default MeditationDetail;

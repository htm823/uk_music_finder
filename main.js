'use strict';

const ukMusicData = [
  // The 1975
  {
    title: "Happiness",
    artist: "The 1975",
    genre: "Indie Rock",
    era: "2020s"
  },
  {
    title: "Somebody Else",
    artist: "The 1975",
    genre: "Indie Rock",
    era: "2010s"
  },

  // Adele
  {
    title: "Hello",
    artist: "Adele",
    genre: "Alternative",
    era: "2010s"
  },
  {
    title: "Rolling in the Deep",
    artist: "Adele",
    genre: "Alternative",
    era: "2010s"
  },

  // The Rolling Stones
  {
    title: "Brown Sugar",
    artist: "The Rolling Stones",
    genre: "Alternative",
    era: "1980s"
  },
  {
    title: "Start Me Up",
    artist: "The Rolling Stones",
    genre: "Alternative",
    era: "1980s"
  },

  // Rick Astley
  {
    title: "Never Gonna Give You Up",
    artist: "Rick Astley",
    genre: "Electronic",
    era: "1980s"
  },
  {
    title: "Together Forever",
    artist: "Rick Astley",
    genre: "Electronic",
    era: "1980s"
  },

  // One Direction
  {
    title: "What Makes You Beautiful",
    artist: "One Direction",
    genre: "Alternative",
    era: "2010s"
  },
  {
    title: "Story of My Life",
    artist: "One Direction",
    genre: "Alternative",
    era: "2010s"
  },

  // Spice Girls
  {
    title: "Wannabe",
    artist: "Spice Girls",
    genre: "Electronic",
    era: "1990s"
  },
  {
    title: "Say You'll Be There",
    artist: "Spice Girls",
    genre: "Electronic",
    era: "1990s"
  },

  // Clean Bandit
  {
    title: "Rather Be",
    artist: "Clean Bandit",
    genre: "Electronic",
    era: "2010s"
  },
  {
    title: "Symphony",
    artist: "Clean Bandit",
    genre: "Electronic",
    era: "2010s"
  },

  // Charli XCX (Britpop扱い)
  {
    title: "Boom Clap",
    artist: "Charli XCX",
    genre: "Britpop",
    era: "2010s"
  },
  {
    title: "360",
    artist: "Charli XCX",
    genre: "Britpop",
    era: "2020s"
  }
];


function createTrackHTML(track) {
	return `
		<li class="results__list-item">
			<dl class="results__track-details">
				<dt class="results__track-title-label">Title</dt>
				<dd class="results__track-title-content">
					<span>${track.title}</span>
					<span><i class="bi bi-copy"></i></span>
				</dd>
				<dt class="results__track-artist-label">Artist</dt>
				<dd class="results__track-artist-content">
					<span>${track.artist}</span>
					<span><i class="bi bi-copy"></i></span>
				</dd>
				<dt class="results__track-genres-label">Genres</dt>
				<dd class="results__track-genres-content">${track.genres}</dd>
				<dt class="results__track-era-label">Era</dt>
				<dd>${track.era}</dd>
			</dl>
		</li>
	`;
}

const trackList = document.getElementById('track-list');

ukMusicData.forEach((track) => {
	trackList.insertAdjacentHTML('beforeend', createTrackHTML(track));
});
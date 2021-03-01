'use strict';

const form = document.querySelector('#form'),
	search = document.querySelector('#search'),
	main = document.querySelector('#main');

const URL = 'https://api.github.com/users/';

const createReposCard = repos => {
	const reposEl = document.querySelector('#repos');

	repos.slice(0, 5).forEach(repo => {
		const { html_url, name } = repo;

		const repoEl = document.createElement('a');
		repoEl.classList.add('repo');
		repoEl.href = html_url;
		repoEl.target = '_blank';
		repoEl.rel = 'noopener noreferrer';
		repoEl.textContent = name;

		reposEl.appendChild(repoEl);
	});
};

const createUserCard = user => {
	const { avatar_url, bio, followers, following, name, public_repos } = user;

	const cardHTML = `
        <div class="card">
				<div>
					<img src="${avatar_url}" alt="${name}" class="avatar" />
				</div>

				<div class="user-info">
					<h2>${name}</h2>
					<p>${bio}</p>

					<ul>
						<li>${followers} <strong>followers</strong></li>
						<li>${following} <strong>followings</strong></li>
						<li>${public_repos} <strong>repos</strong></li>
					</ul>

					<div id="repos">
						
					</div>
				</div>
			</div>
    `;

	main.innerHTML = cardHTML;
};

const displayError = message => {
	const errorDiv = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `;

	main.innerHTML = errorDiv;
};

const getRepos = async user => {
	try {
		const { data } = await axios(URL + user + '/repos?sort=created');
		createReposCard(data);
	} catch (error) {
		displayError('Repos not found');
	}
};

const getUser = async user => {
	try {
		const { data } = await axios(URL + user);
		createUserCard(data);
		getRepos(user);
	} catch (error) {
		displayError('No Profile with Username');
	}
};

form.addEventListener('submit', e => {
	e.preventDefault();

	const user = search.value;

	if (user.trim() === '') return;

	getUser(user);
	form.reset();
});

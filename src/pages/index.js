/* eslint-disable prettier/prettier */
import React from 'react';

import Head from 'next/head';
import { Container } from '../styles/pages/home';
import RocketseatLogo from '../assets/rocketseat.svg';

export default function Home() {
	return (
		<Container>
			<Head>
				<title>Homepage</title>
			</Head>

			<RocketseatLogo />
			<h1>ReactJS Structure</h1>
			<p>A ReactJS + Next.js structure made by Rocketseat.</p>
		</Container>
	)
}

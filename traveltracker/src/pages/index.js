import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import PrimaryButtonEnabled from '@/components/button-primary-enabled';
import SecondaryButtonEnabled from '@/components/button-secondary-enabled';
import { Main } from 'next/document';

export default function Home() {
	return (
		<>
			<PrimaryButtonEnabled />
			<SecondaryButtonEnabled />
		</>
	);
}

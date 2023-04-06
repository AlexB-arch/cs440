import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import PrimaryButtonEnabled from '@/components/button-primary-enabled';
import SecondaryButtonEnabled from '@/components/button-secondary-enabled';
import { Main } from 'next/document';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<div>
				<PrimaryButtonEnabled />
				<SecondaryButtonEnabled />
			</div>
		</>
	);
}

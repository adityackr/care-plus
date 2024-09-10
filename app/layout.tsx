import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const fontSans = Plus_Jakarta_Sans({
	subsets: ['latin'],
	variable: '--font-sans',
	weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'CarePulse',
	description: 'A Simple Healthcare Platform',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					'min-h-screen bg-dark-300 font-sans antialiased',
					fontSans.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

import type { Preview } from '@storybook/sveltekit';
import '../src/styles/main.scss'
import {setLocale} from '../src/lib/paraglide/runtime'
import Container from '../src/lib/components/container/container.svelte';

export const globalTypes = {
	language: {
		toolbar: {
			title: 'Language',
			showName: true,
			defaultValue: 'en',
			icon: 'globe',
			items: [
				{
					value: 'en',right: '🇬🇧',title: 'English'
				},
				{
					value: 'fr',right: '🇫🇷',title: 'French'
				}
			],
			dynamicTitle: true
		}
	}
};

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
	},
	globalTypes,
	initialGlobals: {
		language: 'en'
	},
	decorators: [
		(_story, context) => {
			const selectedLanguage = context.globals.language || 'en';
			setLocale(selectedLanguage);
			return _story();
		},
		() => Container
	]
};

export default preview;

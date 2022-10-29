import { extendTheme } from '@chakra-ui/react';
import { accordionTheme } from './accordion';

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const theme = extendTheme({
	config,
	components: { Accordion: accordionTheme },
});

export default theme;

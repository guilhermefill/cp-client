import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(accordionAnatomy.keys);

const xl = defineStyle({
	fontSize: 'xl',
	fontWeight: '500',
	px: '12',
	h: '12',
});

const lg = defineStyle({
	fontSize: 'lg',
});

const sizes = {
	xl: definePartsStyle({ icon: xl, button: xl, panel: lg }),
};

export const accordionTheme = defineMultiStyleConfig({ sizes });

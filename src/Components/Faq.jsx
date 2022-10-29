import {
	HStack,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Stack,
	Heading,
	Text,
	useBreakpointValue,
	Flex,
} from '@chakra-ui/react';
import React from 'react';

const Faq = () => {
	return (
		<div>
			<Stack align="center" m={20}>
				<HStack align="center" spacing={20}>
					<Flex>
						<Stack spacing={6} w={'full'} maxW={'xl'}>
							<Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
								<Text
									as={'span'}
									position={'relative'}
									_after={{
										content: "''",
										width: 'full',
										height: useBreakpointValue({ base: '20%', md: '30%' }),
										position: 'absolute',
										bottom: 1,
										left: 0,
									}}
								>
									Frequently <br /> Asked <br /> Questions
								</Text>
							</Heading>
							<Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.400'}>
								Everything you need to know.
							</Text>
						</Stack>
					</Flex>
					<Flex flex="1" w={'50vw'}>
						<Accordion minW={'50vw'} size="xl">
							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											Section 1 title
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											Section 2 title
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											Section 3 title
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											Section 4 title
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											Section 5 title
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											Section 6 title
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</Flex>
				</HStack>
			</Stack>
		</div>
	);
};

export default Faq;

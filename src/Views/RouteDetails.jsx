import {
	Heading,
	HStack,
	Image,
	Stack,
	Text,
	VStack,
	Avatar,
	Container,
} from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Components/Navbar';

const RouteDetails = () => {
	return (
		<div>
			<Navbar />
			<VStack spacing={10} m={10}>
				<HStack spacing={20}>
					<VStack align="left" spacing={10}>
						<Heading>Lorem ipsum</Heading>
						<Image
							maxH="300px"
							maxW="600px"
							objectFit={'cover'}
							src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/man-cycling-on-a-wet-road-in-rain-salzburg-austria-royalty-free-image-1594118815.jpg?crop=0.670xw:1.00xh;0.0867xw,0&resize=640:*"
						></Image>
						<Stack maxW="600px">
							<Text>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore magna
								aliquyam erat, sed diam voluptua.
							</Text>
							<Stack m={6} direction={'row'} spacing={4} align={'center'}>
								<Avatar
									src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
									alt={'Author'}
								/>
								<Stack direction={'column'} spacing={0} fontSize={'sm'}>
									<Text fontWeight={600}>Achim Rolle</Text>
									<Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
								</Stack>
							</Stack>
						</Stack>
					</VStack>
					<iframe
						src="https://open.spotify.com/embed/playlist/3IFH5kUgVqXxmc04ebHLDk?utm_source=generator"
						width="60%"
						height="380"
						frameBorder="0"
						allowfullscreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
						title="playlist"
					></iframe>
				</HStack>
				<Container minW="1000px" m={25}>
					<Text align={'justify'}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
						placerat egestas ultrices. Suspendisse condimentum ipsum non est
						tristique maximus. Quisque a eleifend dolor, id viverra dolor. Sed a
						lectus et dui feugiat fringilla quis sed nulla. Aliquam vestibulum
						enim in ullamcorper vulputate. Suspendisse feugiat quam elementum
						nisi tincidunt finibus. Nullam non porttitor lorem. Aenean placerat
						sed risus nec euismod. Integer varius, urna imperdiet rutrum
						vestibulum, sapien mi ornare neque, a scelerisque dui magna a metus.
						Etiam ornare dolor sed porttitor mollis. Pellentesque nibh diam,
						auctor sit amet placerat at, sollicitudin sed libero. Duis et leo at
						nisl bibendum fringilla. Suspendisse dolor nibh, facilisis ac
						lacinia vitae, congue in neque. Vestibulum vehicula tellus sed lacus
						fringilla, nec iaculis lectus tincidunt. Morbi mattis dapibus neque
						at facilisis. Pellentesque massa neque, convallis tincidunt magna
						ac, luctus interdum neque. Vestibulum congue eget lorem sit amet
						facilisis. Vestibulum a laoreet erat, a hendrerit nunc. Praesent
						volutpat velit nec ex porttitor egestas. Curabitur venenatis ex non
						dui pulvinar semper. Vestibulum volutpat consequat dui, id semper ex
						tristique at. Etiam quis tellus efficitur, aliquam ante at,
						fringilla ex. Quisque semper tempor nisl, non hendrerit augue cursus
						pulvinar. Nam elit eros, fermentum non interdum vel, faucibus et
						augue. Donec fringilla congue pulvinar. Aliquam nec massa suscipit,
						euismod lacus ac, molestie erat. Nullam pretium egestas nulla, non
						porta libero pellentesque a. Sed vel felis eleifend, facilisis
						mauris in, gravida massa. Integer pulvinar massa tincidunt faucibus
						blandit. Curabitur pellentesque mauris id tristique consectetur.
						Praesent purus nunc, tristique sit amet ex in, pulvinar porttitor
						eros. Etiam ex tellus, convallis non turpis vulputate, semper
						vulputate enim. Etiam gravida vulputate finibus. Vivamus egestas
						ipsum dui. Etiam egestas pharetra nisl at tincidunt. Praesent
						aliquam pretium dui, non tristique risus ultrices at. Praesent at
						leo sed arcu facilisis egestas. Duis fringilla aliquet lacus ut
						porttitor. Praesent felis elit, rhoncus eget mauris sed, sagittis
						congue est. Donec quis ultrices diam. Ut tempus aliquet ante, quis
						bibendum leo commodo sit amet. Quisque arcu nisl, aliquet semper
						vestibulum eget, varius eu neque. Nullam fringilla aliquet sem.
					</Text>
				</Container>
			</VStack>
		</div>
	);
};

export default RouteDetails;

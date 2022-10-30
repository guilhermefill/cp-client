import {
	Stack,
	HStack,
	Container,
	Image,
	Text,
	Heading,
} from '@chakra-ui/react';
import React from 'react';
import nois from '../Assets/nois.jpeg';

const WhoWeAre = () => {
	return (
		<div>
			<Stack align="Left" mx={20} my={40} spacing={20}>
				<Heading size="lg">Who Are We</Heading>
				<Stack spacing={50} my={20} align={'center'}>
					<HStack>
						<Container>
							<Text fontWeight={400} fontSize="lg">
								There are many benefits to a joint design and development
								system. Not only does it bring benefits to the design team, but
								it also brings benefits to engineering teams. It makes sure that
								our experiences have a consistent look and feel, not just in our
								design specs, but in production
							</Text>
						</Container>
						<Image
							src={nois}
							width={'20vw'}
							filter={'brightness(85%)'}
							borderRadius={10}
						></Image>
					</HStack>
				</Stack>
			</Stack>
		</div>
	);
};

export default WhoWeAre;

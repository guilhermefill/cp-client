import {
	Heading,
	HStack,
	Image,
	Stack,
	Text,
	VStack,
	Avatar,
	Container,
	Skeleton,
	SkeletonText,
} from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Components/Navbar';
import { useParams } from 'react-router-dom';
import postService from '../Api/postServices';

const RouteDetails = () => {
	const { postId } = useParams();
	const [post, setPost] = React.useState({});

	React.useEffect(() => {
		async function fetchPost() {
			const foundPost = await postService.getPost(postId);
			setPost(foundPost.data);
		}
		fetchPost();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<Navbar />
			<VStack spacing={10} m={10}>
				<HStack spacing={20}>
					<VStack align="left" spacing={10}>
						{post._id ? (
							<Heading>{post.title}</Heading>
						) : (
							<Skeleton height="30px" width="300px" />
						)}
						{post._id ? (
							<Image
								maxH="300px"
								maxW="600px"
								objectFit={'cover'}
								src={post.imageUrl}
							></Image>
						) : (
							<Skeleton height="300px" width="300px" />
						)}
						<Stack maxW="600px">
							{post._id ? (
								<>
									<Text>{post.description}</Text>
									<Stack m={6} direction={'row'} spacing={4} align={'center'}>
										<Avatar src={post.creator.avatar} alt={'Author'} />
										<Stack direction={'column'} spacing={0} fontSize={'sm'}>
											<Text fontWeight={600}>
												{post.creator.firstName} {post.creator.lastName}
											</Text>
											<Text color={'gray.500'}>Created At</Text>
										</Stack>
									</Stack>
								</>
							) : (
								<SkeletonText noOfLines={4} width="300px" spacing="4" />
							)}
						</Stack>
					</VStack>
					{post._id ? (
						<iframe
							src={post.playlistUrl}
							width="60%"
							height="380"
							frameBorder="0"
							allowfullscreen=""
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"
							title="playlist"
						></iframe>
					) : (
						<Skeleton height="300px" width="300px" />
					)}
				</HStack>
				<Container minW="1000px" m={25}>
					{post._id ? (
						<Text align={'justify'}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
							placerat egestas ultrices. Suspendisse condimentum ipsum non est
							tristique maximus. Quisque a eleifend dolor, id viverra dolor. Sed
							a lectus et dui feugiat fringilla quis sed nulla. Aliquam
							vestibulum enim in ullamcorper vulputate. Suspendisse feugiat quam
							elementum nisi tincidunt finibus. Nullam non porttitor lorem.
							Aenean placerat sed risus nec euismod. Integer varius, urna
							imperdiet rutrum vestibulum, sapien mi ornare neque, a scelerisque
							dui magna a metus. Etiam ornare dolor sed porttitor mollis.
							Pellentesque nibh diam, auctor sit amet placerat at, sollicitudin
							sed libero. Duis et leo at nisl bibendum fringilla. Suspendisse
							dolor nibh, facilisis ac lacinia vitae, congue in neque.
							Vestibulum vehicula tellus sed lacus fringilla, nec iaculis lectus
							tincidunt. Morbi mattis dapibus neque at facilisis. Pellentesque
							massa neque, convallis tincidunt magna ac, luctus interdum neque.
							Vestibulum congue eget lorem sit amet facilisis. Vestibulum a
							laoreet erat, a hendrerit nunc. Praesent volutpat velit nec ex
							porttitor egestas. Curabitur venenatis ex non dui pulvinar semper.
							Vestibulum volutpat consequat dui, id semper ex tristique at.
							Etiam quis tellus efficitur, aliquam ante at, fringilla ex.
							Quisque semper tempor nisl, non hendrerit augue cursus pulvinar.
							Nam elit eros, fermentum non interdum vel, faucibus et augue.
							Donec fringilla congue pulvinar. Aliquam nec massa suscipit,
							euismod lacus ac, molestie erat. Nullam pretium egestas nulla, non
							porta libero pellentesque a. Sed vel felis eleifend, facilisis
							mauris in, gravida massa. Integer pulvinar massa tincidunt
							faucibus blandit. Curabitur pellentesque mauris id tristique
							consectetur. Praesent purus nunc, tristique sit amet ex in,
							pulvinar porttitor eros. Etiam ex tellus, convallis non turpis
							vulputate, semper vulputate enim. Etiam gravida vulputate finibus.
							Vivamus egestas ipsum dui. Etiam egestas pharetra nisl at
							tincidunt. Praesent aliquam pretium dui, non tristique risus
							ultrices at. Praesent at leo sed arcu facilisis egestas. Duis
							fringilla aliquet lacus ut porttitor. Praesent felis elit, rhoncus
							eget mauris sed, sagittis congue est. Donec quis ultrices diam. Ut
							tempus aliquet ante, quis bibendum leo commodo sit amet. Quisque
							arcu nisl, aliquet semper vestibulum eget, varius eu neque. Nullam
							fringilla aliquet sem.
						</Text>
					) : (
						<SkeletonText noOfLines={20} width="1000px" spacing="4" />
					)}
				</Container>
			</VStack>
		</div>
	);
};

export default RouteDetails;

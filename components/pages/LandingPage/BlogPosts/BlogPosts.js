import tw from 'twin.macro';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { BigLink, Text, Title, Flex } from 'components/styles';
import { MiniCard, Card as FullCard } from 'components/BlogPosts/Card';
import { useWindowSize, useHasMounted } from 'hooks';

const BlogPosts = ({ articles }) => {
  const { width } = useWindowSize();
  const hasMounted = useHasMounted();
  return (
    <Flex>
      <div
        css={tw`text-center px-3 md:px-6 text-light-700 py-4 md:w-1/2 md:text-left`}
        data-aos="fade-right"
      >
        <Title>Latest Posts</Title>
        <Text>
          I also write articles in my free time. I write about new technologies
          that I find interesting, solutions to an issue that bugs me, and some
          snippets that I hope someone will find useful. My posts are about web
          development and on that mostly about frontend development.
        </Text>
        <Text>
          I usually post a few times every month. Here&apos;s one on the right
          to get you started. Be sure to check out more by clicking the button
          below.
        </Text>
        <Link href="/blog" passHref>
          <BigLink css={tw`mt-6 mx-auto md:ml-0`}>View all posts</BigLink>
        </Link>
      </div>

      <div
        css={tw`flex flex-col items-center justify-center gap-4 md:w-1/2 px-3 md:px-6 `}
        data-aos="zoom-in-up"
      >
        {hasMounted && (
          <>
            {width < 640 || (width >= 768 && width < 1280) ? (
              <FullCard
                article={articles[0]}
                key={`article__${articles[0].id}`}
              />
            ) : (
              <>
                {articles.map((article) => (
                  <MiniCard article={article} key={`article__${article.id}`} />
                ))}
              </>
            )}
          </>
        )}
      </div>
    </Flex>
  );
};

BlogPosts.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BlogPosts;

import { useRouter } from 'next/router';
import tw from 'twin.macro';

import { getCategory } from 'utils/requests';

const styles = {
  nav: tw``,
  list: tw`flex overflow-x-scroll scrollbar-hide text-2xl whitespace-nowrap px-10 sm:px-20 space-x-10 sm:space-x-20`,
  list__item: tw`last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500`,
};

export default function Nav() {
  const router = useRouter();
  return (
    <nav css={styles.nav}>
      <div css={styles.list}>
        {Object.entries(getCategory).map(([key, { title }]) => (
          <h2
            css={styles.list__item}
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}
